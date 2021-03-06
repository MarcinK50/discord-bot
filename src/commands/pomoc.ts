import Discord from 'discord.js';
import Client from '../client';

const help = [
  {
    command: 'pomoc',
    text: 'Wyświetla pomoc (to).',
  },
  {
    command: 'help',
    text: 'Alias dla komendy `%PREFIX%pomoc`',
  },
  {
    command: 'rola dodaj <nazwa_roli>',
    text: 'Dodaje rolę użytkownikowi.',
  },
  {
    command: 'rola usun <nazwa_roli>',
    text: 'Usuwa rolę użytkownikowi.',
  },
  {
    command: 'rola lista',
    text: 'Wyświetla dostępne role.',
  },
  {
    command: 'pobierz',
    text: 'Wyświetla najnowsze wersje aplikacji oraz linki do ich pobrania.',
  },
  {
    command: 'linki',
    text: 'Wyświetla przydatne linki',
  },
  {
    command: 'status',
    text: 'Sprawdza działalność dziennika',
  },
  {
    command: 'ping',
    text: 'Pokazuje opóźnienie bota',
  },
  {
    command: 'lorem',
    text: 'Wyświetla fragment *Lorem ipsum*',
  },
];

export default async function pomoc(client: Client, message: Discord.Message): Promise<void> {
  await message.channel.send([
    '**Lista dostępnych komend:**',
    ...help.map((e: { command: string; text: string }) => `\`${client.config.prefix}${e.command}\`: ${e.text.replace('%PREFIX%', client.config.prefix)}`),
  ].join('\n'));
}
