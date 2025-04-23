variable "aws_region" {
  default = "us-east-1"
}

variable "project_name" {
  default = "java-petclinic"
}

variable "azs" {
  type    = list(string)
  default = ["us-east-1a", "us-east-1b", "us-east-1c"]
}
