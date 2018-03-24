import config from '../../../config';
import sendgrid from 'sendgrid';

class SendgridMailer {

  constructor () {
    this.sg = sendgrid(config.sendgrid.apiKey);
    this.from = config.sendgrid.from;
  }

  prepareOptionsForTextMail(subject, to, content, from) {
    return {
      "content": [
        {
          "type": "text/plain",
          "value": content
        }
      ],
      "from": this.from,
      "personalizations": [
        {
          "subject": subject,
          "to": to
        }
      ]
    };
  }

  // The format of options is same as the format of Request body
  sendMail(subject, to, content, from) {
    let options = this.prepareOptionsForTextMail(subject, to, content, from);

    // Prepare the Mail request object
    var request = this.sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: options
    });

    //With promise
    return this.sg.API(request);
  }

  listApiKeys() {
    var request = this.sg.emptyRequest({
      method: 'GET',
      path: '/v3/api_keys'
    });

    //With promise
    return this.sg.API(request);
  }
}

export default new SendgridMailer();
