
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerAkamaiRtspArgs  extends KalturaUrlTokenizerArgs {
    host? : string;
	cpcode? : number;
}


export class KalturaUrlTokenizerAkamaiRtsp extends KalturaUrlTokenizer {

    host : string;
	cpcode : number;

    constructor(data? : KalturaUrlTokenizerAkamaiRtspArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerAkamaiRtsp' },
				host : { type : 's' },
				cpcode : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerAkamaiRtsp',KalturaUrlTokenizerAkamaiRtsp);
