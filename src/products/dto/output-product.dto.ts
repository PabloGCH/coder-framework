
export class OutputProductDto {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly description: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    constructor(object :any) {
        this.id = object.id || object._id;
        this.name = object.name;
        this.price = object.price;
        this.description = object.description;
        this.createdAt = object.createdAt;
        this.updatedAt = object.updatedAt;
    }
}
