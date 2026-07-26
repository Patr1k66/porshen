const FORM_CONFIG = {
  // Web3Forms — https://web3forms.com (бесплатно для статических сайтов)
  // 1. Зарегистрируйтесь и создайте Access Key
  // 2. Вставьте ключ в accessKey ниже
  // 3. Укажите email получателя в панели Web3Forms
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '04442abe-0893-48f5-8658-e2533ddbfbfc',
  method: 'POST',
  subject: 'Новая заявка — ПОРШЕНЬ',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  messages: {
    success: 'Заявка отправлена! Мы перезвоним вам в ближайшее время.',
    error: 'Не удалось отправить заявку. Попробуйте позже или позвоните нам.',
    validationName: 'Введите имя (минимум 2 символа)',
    validationPhone: 'Введите корректный номер телефона',
    notConfigured: 'Форма не настроена. Добавьте accessKey в data/form-config.js'
  }
};
