# Terraform Provisioner Setup

Terraform provisioner creates and manages AWS resources using [terraform](https://www.terraform.io/docs/index.html). Deployment flows are triggered via Github Actions or Github Deployment API.

## How code is organized

First, a visual representation since a picture is worth a 1000 words:

```
.
└── provision
    └── terraform
        ├── modules
        ├── vars
        └── <common files>
```

`provision/terraform` is a directory to store terraform files to be provisioned.
