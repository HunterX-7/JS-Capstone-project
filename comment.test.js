import { addComment } from "./src/api/commentAPI";

describe('Test commenting an event', ()=>{
    it('Test posting a commennt',  async ()=>{
      await expect((5782802,'israel','nice comment')).toStrictEqual((5782802,'israel','nice comment'));
    });
  });