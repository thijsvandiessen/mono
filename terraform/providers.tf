provider "hcp" {
  project_id = var.hcp_project_id
}

provider "google" {
  project               = var.google_project_id
  billing_project       = var.google_project_id
  user_project_override = true
  region                = var.google_project_region
  credentials           = var.GCP_CREDENTIALS
}

provider "vercel" {
  api_token = var.vercel_api_token
  team      = var.vercel_team_id
}
