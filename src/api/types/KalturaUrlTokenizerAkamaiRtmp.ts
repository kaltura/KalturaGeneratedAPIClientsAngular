
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerAkamaiRtmpArgs  extends KalturaUrlTokenizerArgs {
    profile? : string;
	type? : string;
	aifp? : string;
	usePrefix? : boolean;
}


export class KalturaUrlTokenizerAkamaiRtmp extends KalturaUrlTokenizer {

    profile : string;
	type : string;
	aifp : string;
	usePrefix : boolean;

    constructor(data? : KalturaUrlTokenizerAkamaiRtmpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerAkamaiRtmp' },
				profile : { type : 's' },
				type : { type : 's' },
				aifp : { type : 's' },
				usePrefix : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerAkamaiRtmp',KalturaUrlTokenizerAkamaiRtmp);
