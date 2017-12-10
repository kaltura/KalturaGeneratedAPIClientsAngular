
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerAkamaiSecureHdArgs  extends KalturaUrlTokenizerArgs {
    paramName? : string;
	aclPostfix? : string;
	customPostfixes? : string;
	useCookieHosts? : string;
	rootDir? : string;
}


export class KalturaUrlTokenizerAkamaiSecureHd extends KalturaUrlTokenizer {

    paramName : string;
	aclPostfix : string;
	customPostfixes : string;
	useCookieHosts : string;
	rootDir : string;

    constructor(data? : KalturaUrlTokenizerAkamaiSecureHdArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerAkamaiSecureHd' },
				paramName : { type : 's' },
				aclPostfix : { type : 's' },
				customPostfixes : { type : 's' },
				useCookieHosts : { type : 's' },
				rootDir : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerAkamaiSecureHd',KalturaUrlTokenizerAkamaiSecureHd);
