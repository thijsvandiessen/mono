
variable "hcp_project_id" {
  sensitive = false
  type      = string
  default   = ""
}

variable "vercel_api_token" {
  sensitive = true
  type      = string
  default   = ""
}

variable "vercel_team_id" {
  sensitive = false
  type      = string
}


variable "GCP_CREDENTIALS" {
  sensitive = true
  type      = string
  default   = ""
}

variable "google_project_id" {
  sensitive = false
  type      = string
  default   = "vandiessen"
}

variable "google_project_region" {
  sensitive = false
  type      = string
  default   = "europe-west1-c"
}

variable "GOOGLE_MAPS_API_KEY" {
  sensitive = false
  type      = string
  default   = ""
}

variable "REVALIDATE_TOKEN" {
  sensitive = true
  type      = string
  default   = ""
}

variable "TFC_CONFIGURATION_VERSION_GIT_COMMIT_SHA" {
  type    = string
  default = ""
}
variable "TFC_CONFIGURATION_VERSION_GIT_TAG" {
  type    = string
  default = ""
}

variable "TFC_CONFIGURATION_VERSION_GIT_BRANCH" {
  type    = string
  default = ""
}

locals {
  env_targets = ["preview", "production"]
  repo_root   = abspath("..")
}

moved {
  from = vercel_project.lundi
  to   = module.lundi.vercel_project.app
}

moved {
  from = vercel_deployment.lundi
  to   = module.lundi.vercel_deployment.app
}

moved {
  from = vercel_project_deployment_retention.lundi
  to   = module.lundi.vercel_project_deployment_retention.app
}

moved {
  from = vercel_project_environment_variables.lundi
  to   = module.lundi.vercel_project_environment_variables.app
}

moved {
  from = vercel_project.example
  to   = module.example.vercel_project.app
}

moved {
  from = vercel_deployment.example
  to   = module.example.vercel_deployment.app
}

moved {
  from = vercel_project_deployment_retention.example
  to   = module.example.vercel_project_deployment_retention.app
}

moved {
  from = vercel_project_environment_variables.example
  to   = module.example.vercel_project_environment_variables.app
}

