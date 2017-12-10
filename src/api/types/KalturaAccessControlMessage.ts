
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAccessControlMessageArgs  extends KalturaObjectBaseArgs {
    message? : string;
	code? : string;
}


export class KalturaAccessControlMessage extends KalturaObjectBase {

    message : string;
	code : string;

    constructor(data? : KalturaAccessControlMessageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlMessage' },
				message : { type : 's' },
				code : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlMessage',KalturaAccessControlMessage);
