resource "vercel_project" "lundi" {
  name                       = "lundi"
  framework                  = "nextjs"
  install_command            = "cd ../.. && pnpm i"
  build_command              = "turbo build"
  root_directory             = "apps/lundi-bleu"
  serverless_function_region = "fra1"
}

resource "vercel_project" "example" {
  name                       = "example"
  framework                  = "nextjs"
  install_command            = "cd ../.. && pnpm i"
  build_command              = "turbo build"
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
  production  = var.TFC_CONFIGURATION_VERSION_GIT_TAG != "" ? true : false
}

resource "vercel_deployment" "lundi" {
  project_id  = resource.vercel_project.lundi.id
  files       = data.vercel_project_directory.mono.files
  path_prefix = data.vercel_project_directory.mono.path
  production  = var.TFC_CONFIGURATION_VERSION_GIT_TAG != "" ? true : false
}

resource "vercel_project_deployment_retention" "example" {
  project_id            = vercel_project.example.id
  team_id               = vercel_project.example.team_id
  expiration_preview    = "1m"
  expiration_production = "1y"
  expiration_canceled   = "1m"
  expiration_errored    = "1m"
}

resource "vercel_project_deployment_retention" "lundi" {
  project_id            = vercel_project.lundi.id
  team_id               = vercel_project.lundi.team_id
  expiration_preview    = "1m"
  expiration_production = "1y"
  expiration_canceled   = "1m"
  expiration_errored    = "1m"
}

resource "vercel_project_environment_variables" "lundi" {
  project_id = vercel_project.lundi.id
  variables = [{
    key       = "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"
    value     = var.GOOGLE_MAPS_API_KEY
    target    = ["preview", "production"]
    sensitive = false
    },
    {
      key       = "NEXT_PUBLIC_SITE_NAME"
      value     = "lundi-bleu"
      target    = ["preview", "production"]
      sensitive = false
  }]
}

resource "vercel_project_environment_variables" "example" {
  project_id = vercel_project.example.id
  variables = [{
    key       = "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"
    value     = var.GOOGLE_MAPS_API_KEY
    target    = ["preview", "production"]
    sensitive = false
    },
    {
      key       = "NEXT_PUBLIC_SITE_NAME"
      value     = "example-site-name" // Updated site name for example project
      target    = ["preview", "production"]
      sensitive = false
  }]
}
