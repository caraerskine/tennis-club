class ApplicationMailer < ActionMailer::Base
  default from: my_email = ENV['MY_EMAIL']
  layout 'mailer'
end
