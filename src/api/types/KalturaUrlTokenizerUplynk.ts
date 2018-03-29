
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerUplynkArgs  extends KalturaUrlTokenizerArgs {
    accountId? : string;
}


export class KalturaUrlTokenizerUplynk extends KalturaUrlTokenizer {

    accountId : string;

    constructor(data? : KalturaUrlTokenizerUplynkArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerUplynk' },
				accountId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerUplynk',KalturaUrlTokenizerUplynk);
