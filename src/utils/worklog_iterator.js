class WorklogIterator {
    constructor(aggregate) {
        super()
        facade.log('ConcreteIterator created')
        this.index = 0
        this.aggregate = aggregate
    }

    First (){
        return this.aggregate.list[0]
    }

    Next (){
        this.index += 2
        return this.aggregate.list[this.index]
    }

    CurrentItem (){
        return this.aggregate.list[this.index]
    }
}