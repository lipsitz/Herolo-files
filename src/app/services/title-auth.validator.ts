import {FormControl } from '@angular/forms'

export function  restrictedTitles(titleList){
    return (control:FormControl):{[key:string ]:any }=>{        
        if(!titleList) return null;
      var invalidWords = titleList
      .map(title => control.value && control.value.includes(title) ? title:null).filter(title => title !=null)
      return invalidWords && invalidWords.length>0
      ? {'restrictedTitles': invalidWords.join(',')}
      : null
      }
  }