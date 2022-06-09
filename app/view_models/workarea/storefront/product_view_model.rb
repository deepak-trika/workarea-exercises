module Workarea
  module Storefront
    class ProductViewModel < ApplicationViewModel
      def variants
        variants ||= model.variants
        Products::VariantViewModel.wrap(variants)
      end
    end
  end
end
