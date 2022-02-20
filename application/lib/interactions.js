({
  CallbackTypes: {
    Pong: 1,
    ChannelMessageWithSource: 4,
    DeferredChannelMessageWithSource: 5,
    DeferredUpdateMessage: 6,
    UpdateMessage: 7,
    CommandAutocompleteResult: 8,
    Modal: 9,
  },
  CommandTypes: {
    ChatInput: 1,
    User: 2,
    Message: 3,
  },

  parse(rawInteraction) {
    const entries = Object.entries(rawInteraction);
    const camelEntries = entries.map(([key, value]) => [lib.util.snakeToCamel(key), value]);
    return Object.fromEntries(camelEntries);
  },
});
