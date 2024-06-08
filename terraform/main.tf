terraform {
  cloud {
    organization = "vandiessen"
    hostname     = "app.terraform.io"
    workspaces {
      project = "mono"
      name    = "mono"
    }
  }
  required_providers {
    hcp = {
      source  = "hashicorp/hcp"
      version = "0.87.1"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "1.10.0"
    }
  }
}
