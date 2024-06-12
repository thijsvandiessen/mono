resource "vercel_project" "lundi" {
  name                       = "lundi"
  framework                  = "nextjs"
  install_command            = "npm ci"
  build_command              = "npm run build"
  root_directory             = "apps/lundi-bleu"
  serverless_function_region = "fra1"
}

resource "vercel_project" "example" {
  name                       = "example"
  framework                  = "nextjs"
  install_command            = "npm ci"
  build_command              = "npm run build"
  root_directory             = "apps/example"
  serverless_function_region = "fra1"
}

data "vercel_project_directory" "mono" {
  path = "../"
}

resource "vercel_deployment" "example" {
  project_id  = resource.vercel_project.example.id
  files       = data.vercel_project_directory.mono.files
  path_prefix = data.vercel_project_directory.mono.path
  production  = true
}

resource "vercel_deployment" "lundi" {
  project_id  = resource.vercel_project.lundi.id
  files       = data.vercel_project_directory.mono.files
  path_prefix = data.vercel_project_directory.mono.path
  production  = true
}
