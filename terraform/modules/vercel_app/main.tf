terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
    }
  }
}

resource "vercel_project" "app" {
  name            = var.name
  framework       = "nextjs"
  install_command = var.install_command
  build_command   = var.build_command
  root_directory  = var.root_directory
}

data "vercel_project_directory" "repo" {
  path = var.project_directory_path
}

resource "vercel_deployment" "app" {
  project_id  = vercel_project.app.id
  files       = data.vercel_project_directory.repo.files
  path_prefix = data.vercel_project_directory.repo.path
  production  = var.production
}

resource "vercel_project_deployment_retention" "app" {
  project_id            = vercel_project.app.id
  team_id               = vercel_project.app.team_id
  expiration_preview    = var.expiration_preview
  expiration_production = var.expiration_production
  expiration_canceled   = var.expiration_canceled
  expiration_errored    = var.expiration_errored
}

resource "vercel_project_environment_variables" "app" {
  project_id = vercel_project.app.id
  variables  = var.environment_variables
}
