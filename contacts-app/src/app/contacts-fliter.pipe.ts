import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'contactsFilter' })
export class ContactsFilterPipe implements PipeTransform {
    transform(contacts: any[], value: string): any[] {
        const search: string = value ? value.toLocaleLowerCase() : null;
        return search ? contacts.filter((contact) =>
        contact.name.toLocaleLowerCase().startsWith(search)) : contacts;
    }
}
