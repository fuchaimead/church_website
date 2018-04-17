class Image < ApplicationRecord
  belongs_to :announcement, optional: true
end
