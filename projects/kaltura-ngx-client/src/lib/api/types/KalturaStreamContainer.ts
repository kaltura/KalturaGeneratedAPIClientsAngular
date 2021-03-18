
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaStreamContainerArgs  extends KalturaObjectBaseArgs {
    id? : string;
	type? : string;
	trackIndex? : number;
	language? : string;
	channelIndex? : number;
	label? : string;
	channelLayout? : string;
}


export class KalturaStreamContainer extends KalturaObjectBase {

    id : string;
	type : string;
	trackIndex : number;
	language : string;
	channelIndex : number;
	label : string;
	channelLayout : string;

    constructor(data? : KalturaStreamContainerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStreamContainer' },
				id : { type : 's' },
				type : { type : 's' },
				trackIndex : { type : 'n' },
				language : { type : 's' },
				channelIndex : { type : 'n' },
				label : { type : 's' },
				channelLayout : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaStreamContainer'] = KalturaStreamContainer;