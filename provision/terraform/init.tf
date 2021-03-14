terraform {

  required_version = "~> 0.14.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.32.0"
    }
  }

  backend "s3" {
    key                  = "project.tfstate"
    workspace_key_prefix = "js-exercises"
    region               = "us-east-1"
    encrypt              = true
  }
}
