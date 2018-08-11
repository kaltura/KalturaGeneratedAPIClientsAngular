
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileContainer } from './KalturaFileContainer';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaTransformMetadataJobDataArgs  extends KalturaJobDataArgs {
    srcXsl? : KalturaFileContainer;
	srcVersion? : number;
	destVersion? : number;
	destXsd? : KalturaFileContainer;
	metadataProfileId? : number;
}


export class KalturaTransformMetadataJobData extends KalturaJobData {

    srcXsl : KalturaFileContainer;
	srcVersion : number;
	destVersion : number;
	destXsd : KalturaFileContainer;
	metadataProfileId : number;

    constructor(data? : KalturaTransformMetadataJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTransformMetadataJobData' },
				srcXsl : { type : 'o', subTypeConstructor : KalturaFileContainer, subType : 'KalturaFileContainer' },
				srcVersion : { type : 'n' },
				destVersion : { type : 'n' },
				destXsd : { type : 'o', subTypeConstructor : KalturaFileContainer, subType : 'KalturaFileContainer' },
				metadataProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTransformMetadataJobData'] = KalturaTransformMetadataJobData;