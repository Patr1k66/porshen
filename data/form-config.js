const FORM_CONFIG = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '04442abe-0893-48f5-8658-e2533ddbfbfc',
  method: 'POST',
  subject: 'Новая заявка - ПОРШЕНЬ',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  messages: {
    success: 'Заявка отправлена! Мы перезвоним вам в ближайшее время.',
    error: 'Не удалось отправить заявку. Попробуйте позже или позвоните нам.',
    validationName: 'Введите имя (минимум 2 символа)',
    validationPhone: 'Введите корректный номер телефона',
    notConfigured: 'Форма не настроена. Обновите страницу (Ctrl+F5) или добавьте accessKey в data/form-config.js'
  }
};
