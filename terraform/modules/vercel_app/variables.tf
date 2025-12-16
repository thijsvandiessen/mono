variable "name" {
  type = string
}

variable "root_directory" {
  type = string
}

variable "install_command" {
  type    = string
  default = "cd ../.. && pnpm i"
}

variable "build_command" {
  type    = string
  default = "turbo build"
}

variable "project_directory_path" {
  type    = string
  default = "../"
}

variable "production" {
  type    = bool
  default = false
}

variable "environment_variables" {
  type = list(object({
    key       = string
    value     = string
    target    = list(string)
    sensitive = bool
  }))
}

variable "expiration_preview" {
  type    = string
  default = "1m"
}

variable "expiration_production" {
  type    = string
  default = "1y"
}

variable "expiration_canceled" {
  type    = string
  default = "1m"
}

variable "expiration_errored" {
  type    = string
  default = "1m"
}
