class ApplicationMailer < ActionMailer::Base
  default from: my_email = ENV['MY_EMAIL']
  layout 'mailer'
end


# class ApplicationMailer < ActionMailer::Base
#   default from: -> { @current_user.email if @current_user.present? }
#   layout 'mailer'
# end

#might change?