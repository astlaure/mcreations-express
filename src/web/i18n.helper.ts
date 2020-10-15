import hbs from 'hbs';

function i18nHelper(this: any, key: string) {
  const result = this.t(key);
  return new hbs.handlebars.SafeString(result);
}

export default i18nHelper;
