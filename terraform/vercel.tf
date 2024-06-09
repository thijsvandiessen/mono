resource "vercel_project" "lundi" {
  name = "lundi"
}

data "vercel_project_directory" "lundi" {
  path = "../"
}

resource "vercel_deployment" "lundi" {
  project_id  = resource.vercel_project.lundi.id
  files       = data.vercel_project_directory.lundi.files
  path_prefix = data.vercel_project_directory.lundi.path
  production  = true
  project_settings = {
    framework        = "nextjs"
    install_command  = "npm run ci"
    build_command    = "npm run build"
    output_directory = "apps/lundi-bleu/.next"
    root_directory   = "../"
  }
}
