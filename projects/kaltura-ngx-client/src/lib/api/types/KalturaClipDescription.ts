
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaClipDescriptionArgs  extends KalturaObjectBaseArgs {
    sourceEntryId? : string;
	startTime? : number;
	duration? : number;
	offsetInDestination? : number;
}


export class KalturaClipDescription extends KalturaObjectBase {

    sourceEntryId : string;
	startTime : number;
	duration : number;
	offsetInDestination : number;

    constructor(data? : KalturaClipDescriptionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaClipDescription' },
				sourceEntryId : { type : 's' },
				startTime : { type : 'n' },
				duration : { type : 'n' },
				offsetInDestination : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaClipDescription'] = KalturaClipDescription;