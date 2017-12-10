
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlResource, KalturaUrlResourceArgs } from './KalturaUrlResource';

export interface KalturaSshUrlResourceArgs  extends KalturaUrlResourceArgs {
    privateKey? : string;
	publicKey? : string;
	keyPassphrase? : string;
}


export class KalturaSshUrlResource extends KalturaUrlResource {

    privateKey : string;
	publicKey : string;
	keyPassphrase : string;

    constructor(data? : KalturaSshUrlResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSshUrlResource' },
				privateKey : { type : 's' },
				publicKey : { type : 's' },
				keyPassphrase : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSshUrlResource',KalturaSshUrlResource);
