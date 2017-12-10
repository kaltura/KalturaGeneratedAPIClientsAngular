
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFileContainer } from './KalturaFileContainer';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaTransformMetadataJobDataArgs  extends KalturaJobDataArgs {
    srcXsl? : KalturaFileContainer;
	srcVersion? : number;
	destVersion? : number;
	destXsdPath? : string;
	metadataProfileId? : number;
}


export class KalturaTransformMetadataJobData extends KalturaJobData {

    srcXsl : KalturaFileContainer;
	srcVersion : number;
	destVersion : number;
	destXsdPath : string;
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
				destXsdPath : { type : 's' },
				metadataProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTransformMetadataJobData',KalturaTransformMetadataJobData);
