
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
