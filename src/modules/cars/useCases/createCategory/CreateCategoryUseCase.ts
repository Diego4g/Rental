import { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {

    }
    execute({ description, name }: IRequest): void {
        const categoryAlreadyExits = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExits) {
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }