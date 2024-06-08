resource "vercel_project" "lundi" {
  name = "lundi"
}

data "vercel_project_directory" "lundi" {
  path = "../apps/lundi"
}

resource "vercel_deployment" "lundi" {
  project_id  = data.vercel_project.lundi.id
  files       = data.vercel_project_directory.lundi.files
  path_prefix = data.vercel_project_directory.lundi.path
  ref         = var.TFC_CONFIGURATION_VERSION_GIT_COMMIT_SHA
  production  = true

  environment = {
    FOO = "bar"
  }
}
