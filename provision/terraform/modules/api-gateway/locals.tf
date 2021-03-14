locals {
  name = "${var.name_prefix}-api"
  tags = merge({ Name = local.name }, var.common_tags)
}
