module "vandiessen" {
  source                 = "./modules/vercel_app"
  name                   = "vandiessen"
  root_directory         = "apps/vandiessen"
  production             = var.TFC_CONFIGURATION_VERSION_GIT_TAG != ""
  project_directory_path = local.repo_root

  environment_variables = [
    {
      key       = "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"
      value     = var.GOOGLE_MAPS_API_KEY
      target    = local.env_targets
      sensitive = false
    },
    {
      key       = "NEXT_PUBLIC_SITE_NAME"
      value     = "vandiessen"
      target    = local.env_targets
      sensitive = false
    },
    {
      key       = "REVALIDATE_TOKEN"
      value     = var.REVALIDATE_TOKEN
      target    = local.env_targets
      sensitive = true
    }
  ]
}
