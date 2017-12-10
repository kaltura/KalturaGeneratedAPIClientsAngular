
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUrlTokenizerArgs  extends KalturaObjectBaseArgs {
    window? : number;
	key? : string;
	limitIpAddress? : boolean;
}


export class KalturaUrlTokenizer extends KalturaObjectBase {

    window : number;
	key : string;
	limitIpAddress : boolean;

    constructor(data? : KalturaUrlTokenizerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizer' },
				window : { type : 'n' },
				key : { type : 's' },
				limitIpAddress : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizer',KalturaUrlTokenizer);
