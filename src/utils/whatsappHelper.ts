import { WORKSHOP_INFO } from '../data/workshopData';

export interface WhatsAppInquiryParams {
  carMakeModel?: string;
  carYear?: string;
  serviceName?: string;
  specificIssue?: string;
  preferredDate?: string;
  estimatedPrice?: number;
}

export function generateWhatsAppLink(params: WhatsAppInquiryParams): string {
  const {
    carMakeModel = '',
    carYear = '',
    serviceName = '',
    specificIssue = '',
    preferredDate = '',
    estimatedPrice,
  } = params;

  let message = `Hi Apex AutoCraft Kuching! I would like to inquire about servicing/repairs for my vehicle:\n\n`;

  if (carMakeModel) {
    message += `[Vehicle]: ${carMakeModel} ${carYear ? `(${carYear})` : ''}\n`;
  } else {
    message += `[Vehicle]: [Please specify make & model]\n`;
  }

  if (serviceName) {
    message += `[Service]: ${serviceName}\n`;
  }

  if (estimatedPrice) {
    message += `[Quoted Online Estimate]: ~RM ${estimatedPrice}\n`;
  }

  if (specificIssue) {
    message += `[Issue/Symptoms]: ${specificIssue}\n`;
  }

  if (preferredDate) {
    message += `[Preferred Date/Time]: ${preferredDate}\n`;
  }

  message += `\nCould you please let me know your earliest available appointment slot? Thank you!`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WORKSHOP_INFO.whatsappClean}?text=${encoded}`;
}
