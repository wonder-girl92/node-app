const yargs = require('yargs')

yargs.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true
    }
  },
  handler({ title }) {
    console.log('Add command:', title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Print all notes',
  handler() {
    console.log('List command')
  }
})

yargs.parse()
