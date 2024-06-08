provider "hcp" {
  project_id = var.hcp_project_id
}

provider "vercel" {
  api_token = var.vercel_api_token
  team      = var.vercel_team_id
}
