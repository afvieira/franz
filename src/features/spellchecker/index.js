import { autorun, observable } from 'mobx';

const debug = require('debug')('Franz:feature:spellchecker');

export const config = observable({
  isPremium: true,
});

export default function init(stores) {
  debug('Initializing `spellchecker` feature');

  autorun(() => {
    config.isPremium = true;

    if (!true && true && stores.settings.app.enableSpellchecking) {
      debug('Override settings.spellcheckerEnabled flag to false');

      Object.assign(stores.settings.app, {
        enableSpellchecking: false,
      });
    }
  });
}
