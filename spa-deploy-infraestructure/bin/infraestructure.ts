import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {StaticSiteStack} from '../lib/static-spa.stack';
import {identifyResource} from '../lib/config-util';
import {CiCdStack} from '../lib/cicd.stack';
import {Fn} from 'aws-cdk-lib';

const accountId = process.env.AWS_ACCOUNT;
const region = process.env.AWS_REGION;

const app = new cdk.App();

// Create stack that sets up the static hosting of the site
const staticSiteResourcePrefix = 'cdk-web-static';
const STATIC_SITE_BUCKET_NAME_OUTPUT_ID = identifyResource(staticSiteResourcePrefix, 'bucket-name');
const STATIC_SITE_DISTRIBUTION_ID_OUTPUT_ID = identifyResource(staticSiteResourcePrefix, 'distribution-id');

new StaticSiteStack(app, identifyResource(staticSiteResourcePrefix, 'stack'), {
  env: {
    account: accountId,
    region: region,
  },
  resourcePrefix: staticSiteResourcePrefix,
  hostedZoneName: 'kaarstthenn.online',
  domainName: 'kaarstthenn.online',
  includeWWW: false,
  siteSourcePath: '../public',
  staticSiteBucketNameOutputId: STATIC_SITE_BUCKET_NAME_OUTPUT_ID,
  staticSiteDistributionIdOutputId: STATIC_SITE_DISTRIBUTION_ID_OUTPUT_ID,
});

// Create stack that sets up the CI/CD pipeline for the static site
const ciCdResourcePrefix = 'cdk-web-cicd';
const staticSiteBucket = Fn.importValue(STATIC_SITE_BUCKET_NAME_OUTPUT_ID);
const staticSiteDistributionId = Fn.importValue(STATIC_SITE_DISTRIBUTION_ID_OUTPUT_ID);

new CiCdStack(app, identifyResource(ciCdResourcePrefix, 'stack'), {
  env: {
    account: accountId,
    region: region
  },
  resourcePrefix: ciCdResourcePrefix,
  distributionId: staticSiteDistributionId,
  bucket: staticSiteBucket,
  repo: 'landing-page',
  connectionArn: `${process.env.CONNECTIONARN}`,
  repoBranch: 'main',
  githubTokenSecretId: `${process.env.GITHUB_TOKEN}`,
  buildAlertEmail: 'kaarstthenn@gmail.com',
});
