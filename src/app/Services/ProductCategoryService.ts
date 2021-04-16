import { from } from "rxjs";
import { max } from "rxjs/operators";
import { ProductCategoryModel } from "../Models/ProductCategory";

export class ProductCategoryService
{
  Categories: Array<ProductCategoryModel>;

  constructor()
  {
    this.Categories = new Array<ProductCategoryModel>();

    this.Load();
  }

  IsCategoryOnTheList(name: string): boolean
  {
    name = name.toLowerCase();
    if(this.Categories.find(c => c.Name.toLowerCase() == name))
    {
      return true;
    }
    return false;
  }

  Add(name: string)
  {
    if(!this.IsCategoryOnTheList(name))
    {
      let newId = this.GetMaxId();

      let categ = new ProductCategoryModel();
      categ.Id = ++newId;
      categ.Name = name;

      this.Categories.push(categ);
    }
  }

  GetMaxId(): number
  {
    let maxId = 0;

    if(this.Categories.length)
    {
      maxId = this.Categories.reduce((prev, current) => prev.Id > current.Id ? prev : current).Id
    }

    return maxId;
  }

  Remove(name: string)
  {
    if(this.IsCategoryOnTheList(name))
    {
      const index = this.Categories.findIndex(c => c.Name = name);

      if(index)
      {
        this.Categories.splice(index, 1);
      }
    }
  }

  GetAll(): Array<ProductCategoryModel>
  {
    return this.Categories;
  }

  GetById(id: number): ProductCategoryModel
  {
    const categ = this.Categories.find(c => c.Id == id);

    return categ;
  }

  GetByName(name: string)
  {
    name = name.toLowerCase();

    const categ = this.Categories.find(c => c.Name.toLowerCase() == name);

    return categ;
  }

  Load(): void
  {
    this.Add('Xbox');
    this.Add('Playstation');
    this.Add('Switch');
  }
}
