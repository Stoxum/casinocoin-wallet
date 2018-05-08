import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { STMUtil } from './domain/stm-util';

/*
 * Transform STM date to indicated format
 * Usage:
 *   value | stmDate:"date_format"
*/
@Pipe({name: 'stmDate'})
export class STMDatePipe implements PipeTransform {
    constructor(private datePipe: DatePipe){}

    transform(value: number, format: string): string {
        let unixTimestamp = STMUtil.stoxumToUnixTimestamp(value);
        return this.datePipe.transform(unixTimestamp, format);
    }
}

@Pipe({name: 'stmAmount'})
export class STMAmountPipe implements PipeTransform {
    constructor(private numberPipe: DecimalPipe){}

    transform(value, includeCurrency: boolean, numberFormat: boolean): string {
        if(value == null){
            return "";
        } else if(isNaN(value)){
            let amount = STMUtil.dropsToCsc(value);
            if(numberFormat != null && numberFormat){
                amount = this.numberPipe.transform(amount, "1.2-8");
            }
            if(includeCurrency){
                amount = amount + " STM";
            }
            return amount;
        } else {
            let amount = STMUtil.dropsToCsc(value.toString());
            if(numberFormat != null && numberFormat){
                amount = this.numberPipe.transform(amount, "1.2-8");
            }
            if(includeCurrency){
                amount = amount + " STM";
            }
            return amount;
        }
    }
}

@Pipe({ name: 'toNumber'})
export class ToNumberPipe implements PipeTransform {
    transform(value: string):any {
        let retNumber = Number(value);
        return isNaN(retNumber) ? 0 : retNumber;
    }
}