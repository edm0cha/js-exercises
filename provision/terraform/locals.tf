locals {
  name_prefix = "js-exercises-${var.appEnv}"

  common_tags = {
    owner       = var.owner
    environment = var.appEnv
    bu          = var.bu
    product     = var.product
    component   = var.component
    servicename = "${var.bu}/${var.product}/${var.component}"
    appid       = var.appid
  }
}
