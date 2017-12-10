
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFileContainerArgs  extends KalturaObjectBaseArgs {
    filePath? : string;
	encryptionKey? : string;
	fileSize? : number;
}


export class KalturaFileContainer extends KalturaObjectBase {

    filePath : string;
	encryptionKey : string;
	fileSize : number;

    constructor(data? : KalturaFileContainerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFileContainer' },
				filePath : { type : 's' },
				encryptionKey : { type : 's' },
				fileSize : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileContainer',KalturaFileContainer);
