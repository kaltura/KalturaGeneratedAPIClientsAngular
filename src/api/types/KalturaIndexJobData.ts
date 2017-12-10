
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter } from './KalturaFilter';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaIndexJobDataArgs  extends KalturaJobDataArgs {
    filter? : KalturaFilter;
	lastIndexId? : number;
	lastIndexDepth? : number;
	shouldUpdate? : boolean;
}


export class KalturaIndexJobData extends KalturaJobData {

    filter : KalturaFilter;
	lastIndexId : number;
	lastIndexDepth : number;
	shouldUpdate : boolean;

    constructor(data? : KalturaIndexJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIndexJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaFilter, subType : 'KalturaFilter' },
				lastIndexId : { type : 'n' },
				lastIndexDepth : { type : 'n' },
				shouldUpdate : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIndexJobData',KalturaIndexJobData);
