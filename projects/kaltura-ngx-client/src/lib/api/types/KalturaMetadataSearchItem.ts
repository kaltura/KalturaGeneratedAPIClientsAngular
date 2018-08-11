
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchOperator, KalturaSearchOperatorArgs } from './KalturaSearchOperator';

export interface KalturaMetadataSearchItemArgs  extends KalturaSearchOperatorArgs {
    metadataProfileId? : number;
	orderBy? : string;
}


export class KalturaMetadataSearchItem extends KalturaSearchOperator {

    metadataProfileId : number;
	orderBy : string;

    constructor(data? : KalturaMetadataSearchItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataSearchItem' },
				metadataProfileId : { type : 'n' },
				orderBy : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMetadataSearchItem'] = KalturaMetadataSearchItem;