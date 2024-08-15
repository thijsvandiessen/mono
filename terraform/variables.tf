
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

variable "GOOGLE_MAPS_API_KEY" {
  sensitive = false
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
